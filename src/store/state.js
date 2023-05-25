export default{
    questionnaire: {
        currentIndex: 0,
        steps: [
            {
                index: 1,
                name: 'feature',
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
                    }
                    
                ]
            },
            {
                index: 2,
                name: 'Test',
                question: 'Do you need GUI and mimic settings preset for sanding?',

                answers: [
                    {
                        answer: 'Wood + composite', 
                        value: 'wood/composite',
                        selected: false, 
                    }
                ]
            },
            {
                index: 3,
                name: 'Test 333',
                question: 'Spørgsmål 3',
                answers: [
                    {
                        answer: 'Wood + composite', 
                        value: 'wood/composite',
                        selected: false, 
                    }
                ]
            },


        ]
    }
}