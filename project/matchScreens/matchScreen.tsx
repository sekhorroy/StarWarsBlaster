import { View, Text, StyleSheet, FlatList } from "react-native"
import { createHashMapUserById, getPlayerMatchedDetailsById } from "../utilties/utils";
import { useEffect, useState } from "react";
import { MatchDataType, UserDataType } from "../utilties/res/data";

export const MatchScreen = (
    {route, navigation}: any, 
) => {

    const {userId, matchData, userData} = route.params;
    const [_userData, setUserData] = useState(createHashMapUserById(userData)) ;
    const [_matchData, setMatchData] = useState(getPlayerMatchedDetailsById(userId, matchData));    
    
    useEffect(()=>{
        
    }, [_userData])

    type RenderUserCardType = {
        index: number,
        item: MatchDataType
    }

    const renderUserCard = ({item, index}: RenderUserCardType) => {

        const winner = 
            ((item?.player1?.score - item?.player2?.score) > 0) 
            ? item?.player1 
            : item?.player2;
        
        return (
            <>
                <View style={[styles.renderUserCardContainer, {backgroundColor: winner.id === userId ? '#B4DA99' : '#EFA696'}]}>
                    <View style={{
                        flex: 1
                    }}>
                        <Text style={styles.textStyle}>
                            {_userData?.get(item?.player1?.id)?.name}
                        </Text>
                    </View>
                    <View style={{
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center'
                    }}> 
                        <Text style={styles.textStyle}>
                            {item?.player1?.score} - {item?.player2?.score}
                        </Text>
                    </View>
                    <View style={{
                        flex: 1
                    }}>
                        <Text style={styles.textStyle1}>
                            {_userData?.get(item?.player2?.id)?.name}
                        </Text>
                    </View>
                </View>
            </>
        )
    }

    const renderDivider = ()  => (
        <View style={styles.divider}></View>
    )

    return (
        <View>
        <FlatList 
            data={_matchData}
            renderItem={renderUserCard}
            scrollEnabled={true}
            ItemSeparatorComponent={renderDivider}
        />
    </View>
    )
}

const styles = StyleSheet.create({
    renderUserCardContainer: {
        display: 'flex',
        flexDirection: 'row',
        padding: 16,
        height: 70,
        alignItems: 'center'
    },
    logo: {
        width: 70,
        height: 70
    },
    textStyle: {
        fontSize: 16,
        color: 'black',
        fontWeight: "400"
    },
    textStyle1: {
        fontSize: 16,
        color: 'black',
        textAlign: 'right',
        fontWeight: "400"
    },
    textStyleScore: {
        fontSize: 18,
        fontWeight: "600",
        color: 'black'
    },
    scoreContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    divider: {
        borderWidth: 0.5,
        borderColor: '#BBC4D5'
    },
    renderUserCardContainer1: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16
    },
    renderUserCardContainer2: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});