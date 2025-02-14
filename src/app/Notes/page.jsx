import React from "react";
import { data } from "@/assets/assets";
import Image from "next/image";

function Page() {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((card, index) => (
        <div
        key={index}
        className="border border-gray-200 rounded-2xl h-[210px] flex flex-col justify-between py-[14px] px-[21px] bg-white hover:shadow-md transition-shadow"
      >
        <div className="flex-grow">
          <div className="mb-2 flex flex-wrap gap-1">
            {card.buttonText.map((btn, i) => (
              <span
                key={i}
                className="text-xs font-semibold px-2 py-1 rounded-full"
                style={{
                  backgroundColor: getLabelColor(btn),
                  color: getTextColor(btn),
                }}
              >
                {btn}
              </span>
            ))}
          </div>
          <h3 className="text-sm font-bold mb-[10px]">{card.title}</h3>
          {card.paragraph && (
            <p className="text-sm text-gray-600">{card.paragraph}</p>
          )}
          <ul className="list-disc pl-5 text-gray-600 text-sm">
            {card.points.map((point, i) => (
              <li  key={i}>{point}</li>
            ))}
          </ul>
          {card.image && (
            <Image
              src={card.image}
              alt="Card Image"
              width={400}
              height={40}
              className="rounded-t-sm object-cover h-[45px] w-full"
            />
          )}
        </div>
        <hr className="my-2" />
        <div className="flex items-center justify-between h-5 mt-2">
          <div className="flex gap-2 items-center">
            <Image
              src={card.avatar}
              alt={card.name}
              width={17}
              height={17}
              className="rounded-full mr-2"
            />
            <h4 className="font-semibold text-sm">{card.name}</h4>
          </div>
          <p className="text-xs text-gray-500">{card.date}</p>
        </div>
      </div>
      
      ))}
    </div>
  );
}

const getLabelColor = (label) => {
  switch (label) {
    case "Weekly":
      return "#E0F7FA";
    case "Monthly":
      return "#E8F5E9";
    case "Product":
      return "#E3F2FD";
    case "Business":
      return "#F3E5F5";
    case "Personal":
      return "#FFF3E0";
    case "Badge":
      return "#FFEBEE";
    default:
      return "#E0E0E0";
  }
};

const getTextColor = (label) => {
  switch (label) {
    case "Weekly":
      return "#00796B";
    case "Monthly":
      return "#388E3C";
    case "Product":
      return "#1565C0";
    case "Business":
      return "#8E24AA";
    case "Personal":
      return "#EF6C00";
    case "Badge":
      return "#D32F2F";
    default:
      return "#424242";
  }
};

export default Page;
