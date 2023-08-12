import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getData } from './../utils/helpers';
import ReactPlayer from 'react-player';

const VideoDetail = () => {
  const { videoId } = useParams();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    // videonun detaylarını alır
    getData(`/details/?id=${videoId}`).then((data) =>
      setDetail(data)
    );
  }, [videoId]);

  return (
    <div className="bg-[#0F0F0F] min-h-[95vh]">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${videoId}`}
        controls
        playing
      />
    </div>
  );
};

export default VideoDetail;
