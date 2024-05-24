import { MatchDataType, UserDataType } from "./res/data"

export const getUserDataById = (
    id: number, 
    userData: UserDataType[]
) => {
    return userData.find((user)=>{
        return user?.id === id
    })
}

export const getTotalScoreForId = (
    id: number,
    matchData: MatchDataType[]
) => {
    let totalScore = 0;
    matchData.map((item)=> {
        if(item?.player1?.id === id) {
            totalScore += item?.player1?.score;
        }
        if(item?.player2?.id === id) {
            totalScore += item?.player2?.score;
        }
    })
    return totalScore;
}

export const addTotalScoreForEachPlayer = (
    userData: UserDataType[],
    matchData: MatchDataType[],
) => {
    let userDataResult:UserDataType[] = []
    userData.map((user, index)=>{
        userDataResult.push({
                ...user,
                totalScore: getTotalScoreForId(
                    user?.id, matchData
                )
            })
    })
    return userDataResult.sort((i, j)=>{
        if(
            i?.totalScore &&
            j?.totalScore
        ) {
            return j?.totalScore - i?.totalScore
        }
        return -1;  
    });
}

export const ROUTE = {
    POINT_TABLE: 'Points Table',
    MATCHES: 'Matches'
}

export const getPlayerMatchedDetailsById = (
    id: number,
    matchData: MatchDataType[],
) => {
    return matchData.filter((item)=>{
        if(
            item?.player1?.id === id ||
            item?.player1?.id === id
        ) {
            return true;
        }
    }).sort((i, j)=>{
            return j?.match - i?.match
    });
}

export const createHashMapUserById = (
    userData: UserDataType[]
) => {
    let myMap = new Map();
    userData.map((item)=> {
        myMap.set(item.id, item);
    })
    return myMap;
}