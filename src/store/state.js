export default{
    questionnaire: {
        currentIndex: 0,
        steps: [
            {
                index: 1,
                name: 'feature',
                imageUrl: '../../src/assets/image/cobot1.png',
                question: '1. Which feature do you need?',
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
                index: 2,
                name: 'Test',
                question: '2. Which product are you working with',

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
                index: 3,
                name: 'Test 333',
                question: '3. Do you need GUI and mimic settings preset for',
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
                index: 4,
                name: 'Test 444',
                question: '4. Is the product you are working with targeted at',
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
                index: 5,
                name: 'Test 555',
                question: '5. Do you need joystick/system that gives more',
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
                index: 6,
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


        ]
    }
}