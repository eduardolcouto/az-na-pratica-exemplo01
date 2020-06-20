import React, { Component } from 'react'
import soundfile from './assets/som_toque2.mp3'


class App extends Component {
  constructor(props){
    super(props)
    this.mySound = new Audio(soundfile);
    this.state = {
        ticket: {},
        hora: '00:00:00'
    }
  }

  componentDidMount = () =>{
    //this.getCallTicket()
    this.iniciaHora()
    //setInterval(this.getCallTicket, 600000)
  }

  iniciaHora = () =>{
    setInterval(this.getHoraAtual, 1000)
  }
  getInitialState = () =>{
    return {ticket: {lastTickets:[]}}
  }

  getHoraAtual = () =>{
    const d = new Date()
    const t = d.toLocaleTimeString('pt-PT', {hour12: false});
    this.setState({
      hora: t
    })
  }

  getCallTicket = () =>{
    const {ticketAPI} = this.props
    console.log('getCallTicket');
    ticketAPI.getcalls()    
    .then(res=>{
        this.setState({
          ticket:res.data
        })
        console.log(res.data)
        //this.mySound.play()
    })
  }

  getPeople(people){
    const {ticketAPI} = this.props
    console.log('getPeople');
    ticketAPI.getPeople(people)    
    .then(res=>{
        console.log(res.data)
        //this.mySound.play()
    })
  }

  render() {
    return (
      <div className="bg-dark full">
        <button onClick={() => this.getPeople('1')}>Chamar</button>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <div className="row" style={{backgroundColor: 'rgb(13,31,99)'}}>
                <div className="col-12" style={{color: "#fff", padding: '5px'}}>
                  <span style={{fontSize: '2.3em'}}><i className="far fa-clock"></i></span>
                  <span style={{fontSize: '3em'}}> {this.state.hora}</span>
                </div>
              </div>
              <div className="row" style={{backgroundColor: 'rgb(127,127,127)'}}>
                <div className="col-12 pt-2 pb-2">
                  <div className="border rounded" style={{height: '70vh', 
                              width: '100%',
                              backgroundColor: 'rgb(178,178,178)'}}>
                    Conteudo
                  </div>
                </div>
                
              </div> 
            </div>
            <div className="col-4" style={{backgroundColor: 'rgb(26,51,131)'}}>
              <div className="row " >
                <div className="col-12"><div className="row">
                  <div className="col-12 text-center"> <p className="display-1 text-warning font-weight-bold">{this.state.ticket.ticketNumber}</p></div></div>
                </div>
                <div className="col-12"><div className="row"><div className="col-12"><p className="display-4 text-center text-warning">{this.state.ticket.ticketGoTo}</p></div></div></div>
                
                
              </div>
              <div className="row"><div className="col-12 bg-dark text-warning text-center">ULTIMAS CHAMADAS</div></div>
              <div className="row p-1">
                <div className="col-12 text-warning">

                     
                        <div className="row mb-2 p-3" style={{backgroundColor: 'rgb(0,89,157)'}} >
                          <div className="col-6"></div>
                          <div className="col-6"></div>
                        </div>
                    
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12" style={{backgroundColor: 'rgb(191,206,219)'}}>
              <div className="container">
                <div className="row">
                  <div className="col-12"><h3>{this.state.ticket.bannerTitle}</h3></div>
                </div>
                <div className="row">
                  <div className="col-12"><p>{this.state.ticket.bannerText}</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}

export default App
