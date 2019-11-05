import platziMusicService from './maximusic'
const tracksService = {}

tracksService.search = function (q) {
   
    const type = 'track'

    return platziMusicService.get('/search',{
        params:{q,type}
    })
    .then(function (res) {
        return res.data
    })
} 

export default tracksService