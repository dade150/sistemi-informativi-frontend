import {CategoryDto} from "./CategoryDto";

export class CourseDto{

  id : number
  name : string
  smallDescription : string
  completeDescription : string
  duration : number
  category : CategoryDto

}
