import React from "react" ;

const listcourse = [
{
title : 'test1' ,
article :'article 2',

},
{
  title : 'test2' ,
  article :'article 2' ,

  },


]



function ListCourse () {

  return (

    <ul>{
  listcourse.map(function afficherMaList (course){
    return (

  <li key={course.objectID} >
         <span>
             {course.title }
         </span>

         <span>  {course.article}</span>

       </li>
       );
   })}

       </ul>

  )
}

export default ListCourse ;




