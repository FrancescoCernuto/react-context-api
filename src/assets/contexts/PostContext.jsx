import { useEffect, useState } from "react";
import { createContext, useContext } from "react";

//  Consumer
const PostContext = createContext();
export const usePostContext = () => useContext(PostContext);

// Provider
export function PostContextProvider({ children })