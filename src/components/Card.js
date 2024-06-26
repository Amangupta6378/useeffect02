import React from 'react';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';

const Card = (props) => {
    let course = props.course;

    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    const clickHandler=()=>{
        if(likedCourses.includes(course.id)){
            // pehle se like hua pada tha 
            setLikedCourses( (prev)=>prev.filter((id)=>id!==course.id));
            toast.warning("Like removed")
        }
        else{
            //pahle se like nhi hai ye course
            // insert karna h ye course liked course me
            if(likedCourses.length==0){
                setLikedCourses([course.id]);
            }
            else{
                //non-empty pehle se
                setLikedCourses((prev)=>[...prev, course.id])
            }
            toast.success("Liked Successfully.")
        }
    }
  return (
    <div className='w-[300px] bg-gray-700 bg-opacity-80 rounded-md overflow-hidden'>
      <div className='relative'>
        <img  src={course.image.url} alt={course.title} />
      </div>
      <div className='w-[40px]  h-[40px] bg-white rounded-full relative ms-auto  right-2 bottom-3 grid place-items-center'>
        <button onClick={clickHandler}>
          {
            likedCourses.includes(course.id) ? 
            (<FcLike fontSize="1.75rem"/>) : (<FcLikePlaceholder fontSize="1.75rem"/>)
          }
        </button>
      </div>
      <div className='p-4'>
        <p className='texts-white text-white text-start font-semibold text-lg leading-6'>{course.title}</p>
        <p className='mt-2 text-white text-start'>
          {
            course.description.length > 100 ? 
            (course.description.substr(0,100))+ "..." :
            (course.description)
          }
        </p>
      </div>
    </div>
  );
};

export default Card;
