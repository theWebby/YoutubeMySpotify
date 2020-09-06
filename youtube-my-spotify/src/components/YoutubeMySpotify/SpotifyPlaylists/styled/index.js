import styled from 'styled-components'
import Playlist from '../Playlist'

export const Container = styled.div`
    display: flex;
`

export const StyledPlaylist = styled(Playlist)`
    && {
        flex-grow: 1;
        color: red;
    }
`