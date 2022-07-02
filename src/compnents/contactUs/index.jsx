import React from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";

const contactUs = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const gender = [
    { value: "male", label: "male" },
    { value: "female", label: "female" },
  ];
  const skills = [
    { value: "html", label: "html" },
    { value: "js", label: "js" },
    { value: "css", label: "css" },
    { value: "bootstrap", label: "bootstrap" },
    { value: "react", label: "react" },
    { value: "angular", label: "angular" },
  ];
  //  console.log(watch());
  console.log(errors, "err");
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="row w-50 mx-auto border my-5 p-5"
      >
        <div className="col-md-6 my-4">
          <label className="mb-2" htmlFor="firstName">
            First Name
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter Your First Name"
            id="firstName"
            {...register("firstName", { required: "true", minLength: 3 })}
          />
          {errors.firstName && errors.firstName.type === "required" && (
            <small className="text-danger">first name is required </small>
          )}
          {errors.firstName && errors.firstName.type === "minLength" && (
            <small className="text-danger">enter more than 3 characters </small>
          )}
        </div>

        <div className="col-md-6 my-4">
          <label className="mb-2" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter Your Last Name"
            id="lastName"
            {...register("lastName", { required: "true", maxLength: 7 })}
          />
          {errors.lastName && errors.lastName.type === "required" && (
            <small className="text-danger">last name is required </small>
          )}
          {errors.lastName && errors.lastName.type === "maxLength" && (
            <small className="text-danger">enter less than 7 characters </small>
          )}
        </div>

        <div className="my-4">
          <label className="mb-2" htmlFor="email">
            E-mail
          </label>
          <input
            className="form-control"
            type="text"
            id="email"
            placeholder="Enter Your Email"
            {...register("email", {
              required: "true",
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          />
          {errors.email && errors.email.type === "required" && (
            <small className="text-danger">email is required </small>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <small className="text-danger">
              invalid email (should be like "example@example.com"){" "}
            </small>
          )}
        </div>

        <div className="my-4">
          <label className="mb-2" htmlFor="emailConfirm">
            Confirm Your E-mail
          </label>
          <input
            className="form-control"
            type="text"
            id="emailConfirm"
            placeholder="Enter Your Email Again Please"
            {...register("confirmEmail", {
              required: "true",
              validate: (value) => {
                if (watch("email") != value) {
                  return "your email does not match";
                }
              },
            })}
          />
          {errors.confirmEmail && errors.confirmEmail.type === "required" && (
            <small className="text-danger">confirm your email </small>
          )}
          {errors.confirmEmail && errors.confirmEmail.type === "validate" && (
            <small className="text-danger">{errors.confirmEmail.message}</small>
          )}
        </div>

        <div className="my-4">
          <label className="mb-2">Gender</label>
          <Controller
            name="gender"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Select {...field} options={gender} />}
          />
          {errors.gender && errors.gender.type === "required" && (
            <small className="text-danger">choose a gender </small>
          )}
        </div>
        <div className="my-4">
          <label className="mb-2">Skills</label>
          <Controller
            name="skills"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select {...field} options={skills} isMulti />
            )}
          />
          {errors.skills && errors.skills.type === "required" && (
            <small className="text-danger">choose skills </small>
          )}
        </div>
        <div className="my-4">
          <button type="submit" className="btn btn-outline-success btn-lg px-5">
            Send
          </button>
        </div>
      </form>
    </>
  );
};

export default contactUs;
