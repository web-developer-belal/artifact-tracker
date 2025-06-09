import Lottie from 'lottie-react';
import loadingAnimation from "../assets/lottie/loading.json";

const Loading = () => {
    return (
        <div className='min-h-[400px] flex flex-col items-center justify-center'>
            <Lottie animationData={loadingAnimation} style={{width:200}}></Lottie>
        </div>
    );
};

export default Loading;