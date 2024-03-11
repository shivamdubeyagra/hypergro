import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

const SinglePage = () => {
    const { videoId } = useParams();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const pageNo = searchParams.get('page');
    const [data, setData] = useState(null);

    async function getData() {
        try {
            const response = await fetch(`https://internship-service.onrender.com/videos?page=${pageNo}`);
            const resData = await response.json();
            const VData = resData.data.posts;
            const filteredData = VData.find(item => item.postId === videoId);
            setData(filteredData);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className='flex items-center justify-center mt-10'>
            {data && (
                <div className='rounded-3xl'>
                    <ReactPlayer url={data.submission.mediaUrl} controls={true} width={'100%'} height={'700px'} playing={true}/>
                </div>
            )}
        </div>
    );
};

export default SinglePage;
