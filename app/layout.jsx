"use client";

import Nav from "@components/Nav";
import Provider from "@components/Provider";
import Box from '@mui/material/Box';
export const metadata = {
  title: 'Sweet Space',
  description: 'Description of sweet space',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
      <Box sx={{ margin: '80px' }}>
        <Provider>
        <div className="main">
          <div className="gradient"/>
        </div>
        <main className="app"> 
        <Nav/>
        {children}
        </main>
        </Provider>
        </Box>
        </body>
    </html>
  )
}
