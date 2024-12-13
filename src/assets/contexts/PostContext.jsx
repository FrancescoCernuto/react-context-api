import { useEffect, useState } from "react";
import { createContext, useContext } from "react";

const PostContext = createContext();
export const usePostContext = () => useContext(PostContext);