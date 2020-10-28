export const menuList = [{
    id: 1,
    parent_id: 0,
    name: '广东省',
    children: [{
            id: 2,
            parent_id: 1,
            name: '广州市',
            children: [{
                id: 3,
                parent_id: 2,
                name: '番禺区'
            }, {
                id: 4,
                parent_id: 2,
                name: '天河区'
            }],
        },
        {
            id: 7,
            parent_id: 1,
            name: '深圳市',
            children: [{
                    id: 8,
                    parent_id: 7,
                    name: '南山区'
                },
                {
                    id: 9,
                    parent_id: 7,
                    name: '宝安区'
                },
                {
                    id: 10,
                    parent_id: 7,
                    name: '龙岗区'
                },
                {
                    id: 11,
                    parent_id: 7,
                    name: '龙华区'
                },
            ],
        },
    ],
},
{
    id: 56,
    parent_id: 0,
    name: '广西省',
    children: [{
        id: 57,
        parent_id: 56,
        name: '南宁市'
    }, ],
},
]