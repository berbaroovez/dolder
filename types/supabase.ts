import CourseForm from "../components/CourseForm";
import { Database } from "../lib/database.types";



type Course = Database["public"]["Tables"]["courses"]["Row"];

export type {Course} 