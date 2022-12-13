import React, { useContext, useState } from 'react'
import { AuthenticationContext } from 'context/Authentication'
import UseVideoInfoHandlers from 'hooks/useVideoInfoHandlers'
import { buildVideoMetadata, buildVideoModal } from 'utils/transformations'
import { sortVideosByPopularity } from 'utils/sorting'
import VideoCard from 'components/Video/VideoCard/VideoCard'

const List = () => {
    const {myList, setMyList} = useContext(AuthenticationContext)
    const [searchedError, setSearchedError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [
        videoInfo, videoInfoError, detailModal, cardClickHandler,
        cardHoverHandler, closeModalHandler
    ] = UseVideoInfoHandlers()
    
    const detailModalComponent = buildVideoModal(detailModal, videoInfo, { closeModalHandler })
    let movieCards
 
        myList.sort(sortVideosByPopularity)
        movieCards = myList.map(video => {
            const { mediaType, extraInfo } = buildVideoMetadata(video, videoInfo)
            return video.poster_path && mediaType && (
                <div className="GridItem"
                    key={video.id}
                    onClick={
                        () => cardClickHandler(video.id, mediaType)}
                    onMouseEnter={
                        () => cardHoverHandler(video.id, mediaType)} >
                    <VideoCard name={video.name || video.title}
                        vote_average={video.vote_average}
                        poster_path={video.poster_path}
                        netflixOriginalCard={false} {...extraInfo} />
                </div>
            )
        })


    return (
        // <div style={{color: 'white', paddingTop: '95px', textAlign: 'center'}}>Coming soon</div>
        (!videoInfoError && !searchedError) ? (
            <div className="SearchContent">
                <div className="SearchGrid">
                    {movieCards}
                </div>
                {detailModalComponent}
            </div>) :
            <ErrorPage errors={videoInfoError || searchedError} />
    )
}

export default List