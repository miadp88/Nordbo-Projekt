export default{
    questionnaire: {
        currentIndex: 0,
        steps: [
            {
                name: 'feature',
                imageUrl: '../../src/assets/image/cobot1.png',
                question: 'Which feature do you need?',
                answers: [
                    {
                        answer: 'Sanding', 
                        value: 'sanding',
                        selected: false, 
                    },
                    {
                        answer: 'Grinding',
                        value: 'grinding', 
                        selected: false,
                    },
                    {
                        answer: 'Spray painting',
                        value: 'spray painting', 
                        selected: false,
                    },
                    {
                        answer: 'Deburring',
                        value: 'deburring', 
                        selected: false,
                    },
                    {
                        answer: 'Polishing',
                        value: 'polishing', 
                        selected: false,
                    },
                    
                ]
            },
            {
                name: 'Test',
                question: 'Which product are you working with',
                answers: [
                    {
                        answer: 'Wood + composite', 
                        value: 'wood/composite',
                        selected: false, 
                    },
                    {
                        answer: 'Textile', 
                        value: 'textile',
                        selected: false, 
                    },
                    {
                        answer: 'Metal', 
                        value: 'metal',
                        selected: false, 
                    },
                    {
                        answer: 'Plastic', 
                        value: 'plastic',
                        selected: false, 
                    },
                ]
            },
            {
                name: 'Test 333',
                question: 'Do you need GUI and mimic settings preset for',
                answers: [
                    {
                        answer: 'Yes', 
                        value: 'yes',
                        selected: false, 
                    },
                    {
                        answer: 'No', 
                        value: 'no',
                        selected: false, 
                    },
                ]
            },
            {
                name: 'Test 444',
                question: 'Is the product you are working with targeted at',
                answers: [
                    {
                        answer: 'Yes', 
                        value: 'yes',
                        selected: false, 
                    },
                    {
                        answer: 'No', 
                        value: 'no',
                        selected: false, 
                    },
                ]
            },
            {
                name: 'Test 555',
                question: 'Do you need joystick/system that gives more',
                answers: [
                    {
                        answer: 'Yes', 
                        value: 'yes',
                        selected: false, 
                    },
                    {
                        answer: 'No', 
                        value: 'no',
                        selected: false, 
                    },
                ]
            },
            {
                name: 'Test 666',
                question: '6. Do you need the possiblity to include an',
                answers: [
                    {
                        answer: 'Yes', 
                        value: 'yes',
                        selected: false, 
                    },
                    {
                        answer: 'No', 
                        value: 'no',
                        selected: false, 
                    },
                ]
            },
            {
                name: 'Result',
                question: '',
                answers: [
                    
                ]
            },
        ]
    },
    products: [
        {
            name: 'Mimic kit',
            description: 'Mimic kit er super',
            imageUrl: '#',
            properties: ['sanding', 'grinding', 'spray painting', 'deburring']
        },
        {
            name: 'CraftMate',
            description: 'Køb de nu bare',
            imageUrl: '#',
            properties: ['sanding', 'spray painting', 'deburring']
        },
        {
            name: 'QCLab',
            description: 'Det er godt',
            imageUrl: '#',
            properties: ['polishing', 'grinding', 'deburring']
        },
    ]
}