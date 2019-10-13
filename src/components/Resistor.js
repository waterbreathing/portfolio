import React, { Component } from 'react';
import './Resistor.css'


class Resistor extends Component {
    state = {
        tableLength: 0,
        resistance: 0,
        tolerance: 20,
        TCR: null,
        message: ''
    }

    decoderTable = [
        {
            color: 'black',
            digit: '0',
            multiply: 1,
            tolerance: null,
            TCR: 250,
        },
        {
            color: 'brown',
            digit: 1,
            multiply: 10,
            tolerance: 1,
            TCR: 100,
        },
        {
            color: 'red',
            digit: 2,
            multiply: 100,
            tolerance: 2,
            TCR: 50,
        },
        {
            color: 'orange',
            digit: 3,
            multiply: 1000,
            tolerance: null,
            TCR: null,
        },
        {
            color: 'yellow',
            digit: 4,
            multiply: 10000,
            tolerance: null,
            TCR: 25,
        },
        {
            color: 'green',
            digit: 5,
            multiply: 100000,
            tolerance: 0.5,
            TCR: 20,
        },
        {
            color: 'blue',
            digit: 6,
            multiply: 1000000,
            tolerance: 0.25,
            TCR: 10,
        },
        {
            color: 'violet',
            digit: 7,
            multiply: 10000000,
            tolerance: 1,
            TCR: 5,
        },
        {
            color: 'gray',
            digit: 8,
            multiply: null,
            tolerance: 0.05,
            TCR: 1,
        },
        {
            color: 'white',
            digit: 9,
            multiply: null,
            tolerance: null,
            TCR: null,
        }, {
            color: 'silver',
            digit: null,
            multiply: 0.01,
            tolerance: 10,
            TCR: null,
        }, {
            color: 'gold',
            digit: null,
            multiply: 0.1,
            tolerance: 5,
            TCR: null,
        },
    ]

    nextStripe = 1;

    resistorQuery = [];

    reset = () => {

        this.nextStripe = 1;
        this.resistorQuery = [];
        // alert('1')
        for (let i = 1; i <= 6; i++) {
            document.getElementsByClassName(`stripe${i}`)[0].style.backgroundColor = "transparent"
        }

        this.setState({
            tableLength: 0,
            resistance: 0,
            tolerance: 20,
            TCR: null,
            message: ''
        })
    }

    addRefuse = (element) => {
        document.getElementsByClassName(`sqr ${element.color}`)[0].classList.add('refuse');
        setTimeout(() => document.getElementsByClassName(`sqr ${element.color}`)[0].classList.remove('refuse'), 300)


    }

    handleResClick = (element) => {

        if (element.digit === '0' && this.nextStripe === 1) {

            this.addRefuse(element);

            return
        }

        ;
        if ((element.digit === null && this.nextStripe === 1) || (this.nextStripe === 2 && element.digit === null)) {
            this.addRefuse(element);
            return
        };
        if ((this.nextStripe === 3 && element.multiply === null) || (this.nextStripe === 3 && element.multiply === null)) {
            this.addRefuse(element);
            return
        };
        if (this.nextStripe === 6 && element.TCR === null) {
            this.addRefuse(element);
            return
        };

        if (this.nextStripe === 5 && element.tolerance === null) {
            this.addRefuse(element);
            return
        };




        if (this.state.message) {
            this.setState({ message: '' })
        }

        if (this.nextStripe < 7) {




            const stripe = document.getElementsByClassName(`stripe${this.nextStripe}`)[0];
            stripe.style.backgroundColor = element.color;

            this.resistorQuery.push(element);
            console.log(this.resistorQuery);
            this.nextStripe++;
        } else {
            this.reset();
        }
    }


    parseResult = (decoded) => {
        decoded = Math.round(decoded * 100) / 100;

        decoded = decoded + '';
        //a number is passed, and number has no length

        console.log('przekazane', decoded)

        if (decoded * 1 > 0 && decoded * 1 < 1) {

            console.log(decoded);
            return `Resistance is ${decoded} Ω.`

            //Ω is left alt+234
        }



        if (decoded * 1 < 999) {
            console.log(decoded);
            return `Resistance is ${decoded} Ω.`

            //Ω is left alt+234
        }
        else if (decoded * 1 >= 1000 && decoded * 1 <= 999999) {
            const thousands = decoded.slice(-3);
            const front = decoded.slice(0, decoded.length - 3);
            console.log('tysieczne: ', thousands, 'a front: ', front);
            return `Resistance is ${front},${thousands.slice(0, 2)} kΩ.`

        } else if (decoded * 1 >= 1000000) {
            const milions = decoded.slice(-6);
            const front = decoded.slice(0, decoded.length - 6);
            console.log('milionowe: ', milions, 'a front: ', front)
            return `Resistance is ${front},${milions.slice(0, 2)} MΩ.`
        }

    }


    decode = () => {
        const tableLength = this.resistorQuery.length;

        let result = {};

        if (tableLength === 4) {
            if (this.resistorQuery[3].tolerance === null) {
                this.setState({
                    message: " The 4-th stripe is incorrect or you haven't finished yet"
                })
                return;
            }
        }

        if (tableLength === 5 || tableLength === 6) {
            if (this.resistorQuery[2].digit === null) {
                this.setState({
                    message: ' The third stripe is incorrect '
                })
                return;
            }
        }


        if (tableLength === 5 || tableLength === 6) {
            if (this.resistorQuery[3].multiply === null) {
                this.setState({
                    message: ' The 4th stripe is incorrect '
                })
                return;
            }
        }



        switch (tableLength) {

            case 3:
                result = (this.resistorQuery[0].digit + '' + this.resistorQuery[1].digit) * this.resistorQuery[2].multiply;

                result = this.parseResult(result);

                console.log(result, ' a tolerancja 20%')
                this.setState({
                    resistance: result,
                    tolerance: 20,
                    tableLength
                })


                break;

            case 4:
                result = (this.resistorQuery[0].digit + '' + this.resistorQuery[1].digit) * this.resistorQuery[2].multiply;

                console.log(result, 'tolerancja: ', this.resistorQuery[3].tolerance, '%')
                // if (this.resistorQuery[3].tolerance === null) console.log('raczej zle wprowadzileś 4ty pasek');
                result = this.parseResult(result);

                this.setState({
                    resistance: result,
                    tolerance: this.resistorQuery[3].tolerance,
                    tableLength
                })

                break;
            case 5:
                result = (this.resistorQuery[0].digit + '' + this.resistorQuery[1].digit + '' + this.resistorQuery[2].digit) * this.resistorQuery[3].multiply;

                console.log(result, 'tolerancja: ', this.resistorQuery[4].tolerance, '%')
                result = this.parseResult(result);


                this.setState({
                    resistance: result,
                    tolerance: this.resistorQuery[4].tolerance,
                    tableLength
                })


                break;
            case 6:
                result = (this.resistorQuery[0].digit + '' + this.resistorQuery[1].digit + '' + this.resistorQuery[2].digit) * this.resistorQuery[3].multiply;

                console.log(result, 'tolerancja: ', this.resistorQuery[4].tolerance, '%', 'TCR', this.resistorQuery[5].TCR)

                result = this.parseResult(result);

                this.setState({
                    resistance: result,
                    tolerance: this.resistorQuery[4].tolerance,
                    TCR: this.resistorQuery[5].TCR,
                    tableLength
                })

                break;

            default:

        }



    }



    render() {

        const reisorColors = this.decoderTable.map(element => <div key={element.color} className={`sqr ${element.color}`} style={{ backgroundColor: element.color }}
            onClick={this.handleResClick.bind(this, element)}

        >{element.digit}</div>)



        return (
            <div className="resistorContainer">

                <div className="resistorColors">
                    {reisorColors}

                </div>

                <div className='resOutput'>
                    {this.state.tableLength !== 0 && !this.state.message ? <p>{this.state.resistance} Tolerance: {this.state.tolerance} %
                {this.state.TCR ? <span> and TCR: {this.state.TCR} ppm/K</span> : null}

                    </p> : null}
                    {this.state.message ? <p>{this.state.message}
                    </p> : null}
                </div>

                <div className="decodedResitor">

                    <div className="lead"></div>
                    <div className="resistorBody">
                        <div className="stripe1 resStripe"></div>
                        <div className="stripe2 resStripe "></div>
                        <div className="stripe3 resStripe "></div>
                        <div className="stripe4 resStripe "></div>
                        <div className="stripe5 resStripe"></div>
                        <div className="stripe6 resStripe "></div>


                    </div>
                    <div className="lead"></div>

                </div>

                <div className='resistorBtnContainer'>
                    <button onClick={this.decode} className='resistorBtn'>decode</button>
                    <button onClick={this.reset} className='resistorBtn'>reset</button>
                </div>
                <p className='aboutResistors'>
                    Resistors are the most popular electronic parts and their resistance is most often displayed by means of a multi-colored code printed on them. The order in which this code is read is important and some colors may not be placed in certain positions. This program allows you to quickly read resistor information and prevents you from using the wrong resistor code. The last 2 stripes when choosing a color represent silver and gold.
                </p>
            </div>
        )
    }
}

export default Resistor;