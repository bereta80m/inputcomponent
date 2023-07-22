import React from "react";
import Input from "@mui/base/Input";
import CallIcon from "@mui/icons-material/Call";
import LockIcon from "@mui/icons-material/Lock";

function Content() {
  return (
    <div className="flex flex-col h-screen w-full pl-72  gap-5">
      <div className="w-full py-5">
        <p className="text-4xl font-bold">Inputs</p>
      </div>

      <div className="grid lg:grid-cols-3 lg:grid-rows-2 w-full border ">
        {Labels.map((item, index) => {
          return (
            <div key={index} className="flex  flex-col gap-2 w-60 ">
              <p>{item.text}</p>
              <p className="text-lg font-semibold ">{item.label}</p>
              {item.Input}
            </div>
          );
        })}
      </div>
      <div className="w-60">
        <p className="">{"<Input disabled />"}</p>
        <p className="text-lg font-semibold text-black ">Label</p>
        <Input
          placeholder="Placeholder"
          disabled
          style={{ backgroundColor: "#f2f2f2", color: "#f2f2f2" }}
          className="border border-[#f2f2f2] rounded-lg py-3 px-3 bg-[#f2f2f2]  text-lg font-semibold  "
        />
      </div>

      <div className="grid lg:grid-cols-2  gap-5 lg:grid-rows-2 w-full border ">
        {OtherLabels.map((item, index) => {
          return (
            <div key={index} className="flex  flex-col w-80 ">
              <p className=" ">{item.text}</p>
              {item.label}
              <div
                className={`flex gap-2 items-center border ${
                  !item.isread ? "border-black/50" : "border-red-500"
                } rounded-lg py-3 px-3  text-lg font-semibold`}
              >
                {item.right && item.Icon}
                {item.Input}
                <p className="flex pl-10">{item.left && item.Icon}</p>
              </div>
              {item.other}
            </div>
          );
        })}
      </div>
      <div className="w-60">
        <p className="">{"<Input disabled />"}</p>
        <p className="text-lg font-semibold text-black ">Label</p>
        <Input
          placeholder="Placeholder"
          className="border border-black/50 rounded-lg py-3 px-3  text-lg font-semibold  "
        />
      </div>

      <div className="grid lg:grid-cols-2">
        <div className="w-60">
          <p className="">{'<Input size="sm" />'}</p>
          <p className="text-lg font-semibold text-black ">Label</p>
          <Input
            placeholder="Placeholder"
            className="border border-black/50 rounded-lg py-1 px-3  text-lg font-semibold  "
          />
        </div>
        <div className="w-60">
          <p className="">{'<Input size="md" />'}</p>
          <p className="text-lg font-semibold text-black ">Label</p>
          <Input
            placeholder="Placeholder"
            className="border border-black/50 rounded-lg py-3 px-3  text-lg font-semibold  "
          />
        </div>
      </div>
      <div className="">
      <p className="">{'<Input fullWidth />'}</p>
          <p className="text-lg font-semibold text-black ">Label</p>
          <Input
            placeholder="Placeholder"
            className="border border-black/50 rounded-lg py-3 px-3  text-lg font-semibold  "
          />
      </div>
      <div className="w-64  pb-5">
      <p className="">{'<Input multiline row="4" />'}</p>

      <p className="text-lg font-semibold text-black ">Label</p>
          <Input
          multiline
          rows={4}
            placeholder="Placeholder"
            className="border border-black/50 rounded-lg py-3 px-3  text-lg font-semibold  "
          />
      </div>

    </div>
  );
}

export default Content;

const OtherLabels = [
  {
    Input: <Input placeholder="Placeholder" className=" " />,
    label: <p className="text-lg font-semibold text-black/50">Label</p>,
    text: "<Input helperText='Some interesting text' />",
    other: <p className="text-gray-400">Some interesting text</p>,
    isread: false,
    Icon: "",
  },
  {
    Input: <Input placeholder="Placeholder" className=" " />,
    label: <p className="text-lg font-semibold text-red-500">Label</p>,
    text: "<Input helperText='Some interesting text' />",
    other: <p className="text-red-500">Some interesting text</p>,
    isread: true,
    Icon: "",
  },

  {
    Input: <Input placeholder="Placeholder" className="  " />,
    label: <p className="text-lg font-semibold text-black/50">Label</p>,
    text: "<Input startIcon />",
    other: <p className="text-gray-400"></p>,
    isred: false,
    Icon: <CallIcon className="text-gray-400" />,
    right: true,
  },
  {
    Input: <Input placeholder="Placeholder" className=" " />,
    label: <p className="text-lg font-semibold text-black/50">Label</p>,
    text: "<Input endIcon />",
    other: <p className="text-gray-400"></p>,
    isred: true,
    Icon: <LockIcon className=" text-gray-400" />,
    left: true,
  },
];

const Labels = [
  {
    Input: (
      <Input
        placeholder="Placeholder"
        className="border border-black/50 rounded-lg py-3 px-3  text-lg font-semibold  "
      />
    ),
    label: "Label",
    text: "<Input />",
  },
  {
    Input: (
      <Input
        placeholder="Placeholder"
        className="border border-black rounded-lg py-3 px-3  text-lg font-semibold "
      />
    ),
    label: "Label",
    text: "&:hover",
  },
  {
    Input: (
      <Input
        placeholder="Placeholder"
        className="border border-blue-500 rounded-lg py-3 px-3  text-lg font-semibold "
      />
    ),
    label: <p className="text-lg font-semibold text-blue-500">Label</p>,
    text: "&:focus",
  },

  {
    Input: (
      <Input
        placeholder="Placeholder"
        className="border border-red-500 rounded-lg py-3 px-3  text-lg font-semibold  "
      />
    ),
    label: <p className="text-lg font-semibold text-red-500 ">Label</p>,
    text: "<Input />",
  },
  {
    Input: (
      <Input
        placeholder="Placeholder"
        className="border border-black rounded-lg py-3 px-3  text-lg font-semibold "
      />
    ),
    label: "Label",
    text: "&:hover",
  },
  {
    Input: (
      <Input
        placeholder="Placeholder"
        className="border border-red-500 rounded-lg py-3 px-3  text-lg font-semibold "
      />
    ),
    label: <p className="text-lg font-semibold text-red-500 ">Label</p>,
    text: "&:focus",
  },
];
