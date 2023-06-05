// import { fireEvent, render, screen } from "@testing-library/react";
// import CreateGroup from "../components/CreateGroup";

// describe("CreateGroup", () => {
//   test("Group input should be empty", () => {
//     const values = {
//       id: "",
//       groups: {
//         group: "group",
//         groupDesc: "testDesc",
//         Profile: null,
//       },
//       terms: [
//         {
//           term: "",
//           defination: "",
//           image: null,
//         },
//       ],
//     };
//     render(<CreateGroup values={values.groups.Profile} />);
//     const groupInputEl = screen.getByPlaceholderText(/Organic Chemistry/i);
//     expect(groupInputEl.value).toBe("");
//   });

//   test("Group input should change", () => {
//     render(<CreateGroup />);
//     const groupInputEl = screen.getByPlaceholderText(/Organic Chemistry/i);
//     const groupTestVal = "test";
//     fireEvent.change(groupInputEl, { target: { value: groupInputEl } });
//     expect(groupInputEl.value).toBe(groupTestVal);
//   });

//   test("Group Description input should change", () => {
//     render(<CreateGroup />);
//     const groupDescInputEl = screen.getByPlaceholderText(/Organic Chemistry/i);
//     const groupDescTestVal = "test";

//     fireEvent.change(groupDescInputEl, { target: { value: groupDescTestVal } });

//     expect(groupDescInputEl.value).toBe(groupDescTestVal);
//   });
// });
