import { Button, Drawer, Dropdown, Flex, Input, Select, Space } from 'antd'
import React, { useState } from 'react'
import './reportStyle.css'
import { DownOutlined, PlusOutlined } from '@ant-design/icons'
import TextArea from 'antd/es/input/TextArea';



const options = [
    {
        label: 'Reservation Report',
        value: '1',
    },
    {
        label: 'Front Office report',
        value: '2',
    },
    {
        label: 'Back Office Report ',
        value: '3',
    },
    {
        label: 'Audit Report',
        value: '4',
    },
    {
        label: 'Statistical Report',
        value: '5',
    },
    {
        label: 'Graps and Charts Report',
        value: '6',
    },
    {
        label: 'Consolidate Report',
        value: '7',
    }
];

// function Btn(){
//     return ()
// }
function ReportDesciption() {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    

    return (
        <>
            <Flex justify='space-between'>
                <div className='description-container'>
                    <h1>How Report Insights Works?</h1>
                    <p>
                        This is some discussion for how o start with reports and with some tutorial to start off.Reports are gold for hotels.Occupancy rates guide pricing, guest feedback shapes improvements, and channel performance optimizes marking. Analyzing data unlocks Insights to attract guests, boost revenue and refine oprations,creating a wining hospitality strategy.
                        <br />
                        You can also view this tutorials to our <a href='https://www.youtube.com/playlist?list=PLWSy6qQkwpMma_HVlNW6Pap0KUmSATUqT'>Supports Center</a>
                    </p>
                    <Button className='btn-style' onClick={(showDrawer)}>
                        <PlusOutlined style={{
                            fontSize: "15px",
                            strokeWidth: "50", // --> higher value === more thickness the filled area
                            stroke: "RGB(64, 142, 255)"
                        }}
                        />
                        CREATE NEW REPORT
                    </Button>
                    <Drawer title="New Report" onClose={onClose} open={open} footer={
                        <div style={{float:'right'}}>
                        <Button className='report-btn' onClick={onClose}>
                        Cancle
                    </Button>
                    <Button type='primary' className='report-btn'>
                        Create
                    </Button>
                    </div>
                    }>

                        <p>build your own report and get the exact data you need.Field,filters login , summarize levels sorting and columns can all be configured to meet you preferences.</p>
                        <div>
                            <p>Report Type</p>
                            <Select
                                size={'middle'}
                                style={{
                                    width: '100%',
                                }}
                                options={options}
                            />
                        </div>
                        <div>
                            <p>Report Name</p>
                            <Input placeholder='Name'/>
                        </div>
                        <div>
                            <p>Report Description</p>
                            <TextArea  rows={4} />
                        </div>
                    </Drawer>
                </div>
                <div className='video-container'>
                    <iframe width="450" height="250" className='video-style' src="https://www.youtube.com/embed/89dA88PkCTQ?si=_iKPe5E51-0oZSwU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                    </iframe>
                </div>
            </Flex>

        </>
    )
}

export default ReportDesciption