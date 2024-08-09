import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
const Aboutpage = () => {
  return (
    <div>
      <div className="bg-white flex border-b fixed top-0 left-0 right-0 border-gray-200 px-2 sm:px-4 py-3  text-lg font-nep  md:tracking-wide md:text-2xl">
        <div className=" w-full grid grid-cols-3 justify-items-start">
          <Link to="/menu">
            <FaArrowLeft className="size-5 " />
          </Link>
          <div className="justify-self-center">About</div>
        </div>
      </div>
      <div className=" fixed top-16 left-6 right-6 md:left-60 md:right-60">
        <div className="font-semibold text-2xl mb-4">Our Mission</div>
        <div className="text-justify mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          architecto accusantium. Adipisci sunt ipsam pariatur iusto libero
          obcaecati ipsum quidem, tenetur dolorem alias iure. Vitae deserunt
          nemo eos ab, perferendis odit cum neque! Dolore ducimus totam laborum
          sapiente, beatae culpa similique obcaecati, recusandae, maxime Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam,
          quibusdam autem ea necessitatibus quaerat libero reiciendis, possimus
          dolores non repudiandae quisquam. Aspernatur officia optio laborum
          voluptatum totam odio earum iusto.
        </div>

        <div className="font-semibold mb-4">
          Contact Us:{" "}
          <span className="underline">
            <a href="mailto:nepshots.news@gmail.com">nepshots.news@gmail.com</a>
          </span>
        </div>
        <div className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ab
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          pariatur.
        </div>
        <div className="italic">
          Lorem ipsum dolor sit amet consectetur adipiszcing elit. Nemo
          distinctio est eos repudiandae earum sapiente architecto officiis
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nulla,
          molestias quibusdam ipsa accusantium aspernatur doloremque quae .
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
