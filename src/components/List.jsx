import React from 'react'
import Contents from './Contents'
import { Grid } from '@material-ui/core'

const List = ({ habits, deleteHabit }) => {

    console.log(habits)

    return(    
        // <ul>
            <Grid container spacing={{ xs: 2, md: 3}}  columns={{ xs: 4, sm: 8, md: 12 }}>
                { habits.map( habit => (
                    <Grid item xs={2} sm={4} md={4}>                   
                        <Contents
                        key={habit.id}
                        id={habit.id}
                        content={habit.content}
                        deleteHabit={deleteHabit}
                        />
                    </Grid>
                    )   
                )
                }   
            </Grid>
        // </ul>
    )
}

export default List