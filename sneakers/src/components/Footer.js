import React from 'react'
import Grid from '@mui/material/Grid';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {

    // const FooterStyle={ 
    //     borderTop: "1px solid #E7E7E7",
    //     //textAlign: "center",
    //     padding: "10px",
    //     position: "relative",
    //     left: "0",
    //     bottom: "0",
    //     height: "140px",
    //     width: "100%",
    //     backgroundColor:'#6E8599',
    // }

    return (
            <Grid style={{backgroundColor:'#B8C4CF'}}>
                <div
                    style=
                    {{
                        alignContent:'center',
                        display:'flex',
                        justifyContent:'center',
                    }}                
                >
                    <IconButton
                        size="large"
                        color="inherit"
                        //style={{marginLeft:'400px'}}

                    >

                        <FacebookSharpIcon />
                    </IconButton>

                    <IconButton
                        size="large"
                        color="inherit"
                    // style={{marginLeft:'730px'}}

                    >

                        <TwitterIcon />
                    </IconButton>

                    <IconButton
                        size="large"
                        color="inherit"
                        //style={{marginLeft:'850px'}}

                    >  

                        <InstagramIcon />
                    </IconButton>
                </div>
                

                <Grid container justifyContent="flex-end" style={{height:'80px'}}>
                    <div
                        style={{
                            position:'relative',
                            top:'-63px',
                            right:'40px'
                                
                                
                        }}
                    >
                            <h4>Contact</h4>
                            <p>Phone Number : 0799933448</p>
                            <p>Email : contact@sneaker-heaven.io</p>
                    
                    </div>
                </Grid>
            </Grid>

    )

}
export default Footer;