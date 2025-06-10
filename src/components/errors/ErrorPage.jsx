import Lottie from 'lottie-react';
import errorJson from "../../assets/lottie/404.json";

const ErrorPage = () => {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center'>
            <Lottie animationData={errorJson} style={{width:300}}></Lottie>
        </div>
    );
};

export default ErrorPage;