import React from "react";
import { useForm } from "react-hook-form";
import { apiConnector } from "../services/apiConnector";
import { userApi } from "../services/apis";
import { IoIosAddCircle } from "react-icons/io";
import toast from "react-hot-toast";

const AddUser = ({ userAdded }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = async (data) => {
    const trimmedName = data.name.trim();
    if (!trimmedName) {
      toast.error("Name cannot be empty or just spaces.");
      return;
    }

    try {
      const newUser = await apiConnector("POST", userApi.createUser, {
        name: trimmedName,
      });

      toast.success("User added successfully!");
      reset();

      if (userAdded) {
        userAdded(); // refresh leaderboard
      }
    } catch (error) {
      // Optional: handle duplicate name error (based on backend response)
      if (error.response?.status === 409) {
        toast.error("User with this name already exists.");
      } else {
        toast.error("Failed to add user: " + error.message);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex flex-col gap-2 items-center"
    >
      <input
        type="text"
        placeholder="Enter name"
        {...register("name", { required: "Name is required" })}
        className="border p-1.5 rounded-md"
      />
      {errors.name && (
        <span className="text-red-600 text-sm">
          {errors.name.message}
        </span>
      )}

      <button
        type="submit"
        className="bg-amber-700 cursor-pointer flex items-center justify-center gap-2 text-white px-3 py-1.5 rounded-md"
      >
        Add
        <IoIosAddCircle />
      </button>
    </form>
  );
};

export default AddUser;
