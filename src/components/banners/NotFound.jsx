import NotFoundIcon from "@/components/icons/NotFoundIcon";


const NotFound = () => {
    return (
        <div className='flex flex-col justify-center items-center pt-[55px]'>
            <NotFoundIcon/>
            <p className='font-semibold leading-[25px] text-center'>We don&apos;t have such movies, look for another one</p>
        </div>
    );
};

export default NotFound;
