import moment from 'moment';

export default [{
    id:"1",
    description:'hello',
    note:'',
    amount:1500,
    createdAt:0
    
    },
    {
        id:"2",
        description:'hi',
        note:'',
        amount:1300,
        createdAt:moment(0).subtract(11,'days').valueOf()
        
        },{
            id:"3",
            description:'hope',
            note:'',
            amount:400,
            createdAt:moment(0).add(10,'days').valueOf()
            
            }
    ];