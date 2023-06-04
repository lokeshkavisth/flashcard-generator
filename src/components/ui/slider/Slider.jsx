import React from "react";

const Slider = ({ term, defination, image, termRef }) => {
  //   const { flashcards } = useSelector((state) => state.flashCardData);
  return (
    <div ref={termRef} className="space-y-10 w-full mt-4 xl:mt-0">
      <div className="bg-white p-5 space-y-4 sm:space-y-0 shadow-sm rounded-md sm:min-h-[300px]">
        {/* {flashCard[0].terms.image && (
          <div className="w-52 aspect-video">
            <img src={dummy} alt="enter term title here" loading="lazy" />
          </div>
        )} */}
        {image && (
          <div>
            <img
              src={image}
              alt="enter term title here"
              loading="lazy"
              className="sm:w-96 sm:float-left sm:mr-4 sm:mb-2 aspect-video w-full object-cover rounded-md"
            />
          </div>
        )}

        {/* slider start */}

        <div>
          {/* {flashCard.map(({ terms }) =>
            terms.map(({ defination }, index) => (
              <p key={index}>{defination}</p>
            ))
          )} */}
          <h2 className="font-semibold mb-2">{term}</h2>
          <p>{defination}</p>
        </div>

        {/* slider end  */}
      </div>
    </div>
  );
};

export default Slider;
