import React from "react";
import { InputMenuV1 } from "../components/InputMenuV1";

export default function useInputMenu({ data } : { data: string[]}) {
  return <div>
    <InputMenuV1 />
  </div>;
}
