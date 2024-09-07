/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Oval } from "react-loader-spinner";
import { useMutation } from "react-query";
import { useQuery } from "react-query";

const CreatePost = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [no, setNo] = useState("");
  const [product, setProduct] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  // Queries - get [for fetching the specific data] - getSingleBlogList
  //   const { isLoading, error, data } = useQuery(
  //     ["getSingleBlogList", id],
  //     () => fetchSingleBlog(id),
  //     {
  //       onSuccess: (data) => {
  //         setTitle(data?.data?.title ? data?.data?.title : "");
  //         setImgUrl(data?.data?.imageURL ? data?.data?.imageURL : "");
  //         setDescription(data?.data?.content ? data?.data?.content : "");
  //       },
  //     }
  //   );

  // for edit post
  //   const editPost = useMutation(updateBlogPost, {
  //     onSuccess: () => {
  //       toast.success("Post updated successfully!", {
  //         position: "top-center",
  //         autoClose: 5000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "light",
  //       });

  //       setTitle("");
  //       setImgUrl("");
  //       setDescription("");

  //       setTimeout(() => {
  //         navigate(-1);
  //       }, 1000);
  //     },
  //     onError: () => {
  //       toast.error("Please try again.", {
  //         position: "top-center",
  //         autoClose: 5000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "light",
  //       });
  //     },
  //   });

  //   const handleEditPost = async (e) => {
  //     e.preventDefault();

  //     const postData = {
  //       title: title,
  //       content: description,
  //       imageURL: imgUrl,
  //     };

  //     // editPost.mutate(id, postData); //not work - only accept 1 argument - follow below method
  //     editPost.mutate({ id, data: postData }); // Pass a single object with id and postData
  //   };

  //   if (error)
  //     return (
  //       <div className="flex justify-center items-center h-[24rem]">
  //         Error loading posts
  //       </div>
  //     );

  return (
    <div>
      {false ? (
        <div className="flex justify-center items-center h-[24rem]">
          <Oval
            visible={true}
            height="50"
            width="80"
            color="#4fa94d"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <form className="px-[2rem] mt-14 h-[20rem]">
          <div className="grid gap-6 mb-6 md:grid-cols-2 ">
            <div>
              <label
                htmlFor="website"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Name
              </label>
              <input
                type="text"
                id="website"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm py-[0.8rem] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="website"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Email ID
              </label>
              <input
                type="email"
                id="website"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm py-[0.8rem] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Email ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="website"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Mobile No
              </label>
              <input
                type="number"
                id="website"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm py-[0.8rem] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Mobile No"
                value={no}
                onChange={(e) => setNo(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select Product
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-[0.8rem]"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
              >
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="text-white mt-6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
          >
            Submit
          </button>
        </form>
      )}
      <ToastContainer />
    </div>
  );
};

export default CreatePost;
