import React from 'react'
import { SyncOutlined } from '@ant-design/icons'

export const FullLoading = () => (
    <div className="d-flex-center" style={{
        width: '100vw', height: '100vh',
        fontSize: '40px', opacity: '0.5'
        }}>
         <SyncOutlined spin />
    </div>
)

export const FitLoading = ({fontSize, color}) => (
    <div className="d-flex-center" style={{
        width: '100%', height: '100%',
        fontSize: fontSize, color
        }}>
         <SyncOutlined spin />
    </div>
)