import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Image from 'next/image'
import { SettingsOutlined } from '@mui/icons-material';

const Settings = (props) => {
    const { openSettingsDialog } = props;
    const versionInfo = `Version: ${process.env.REACT_APP_VERSION}`;

    return (
        <div className={'settings-div'}>
            <span className={'settingsTitle'}>
                <Button variant="contained" className="topButton" onClick={() => openSettingsDialog()}>
                    <SettingsOutlined />
                </Button>
            </span>

            <Tooltip placement="bottom" title="View on GitHub">
                <span className={'githubIcon'}>
                    <a href={'https://github.com/obss/react-validatable-form'} target="_blank" rel="noreferrer">
                        <img src={'https://maliksenpai.github.io/react-validatable-form-demo-nextjs/github.png'} width={"50%"} height={"50%"} alt="github_icon" />
                    </a>
                </span>
            </Tooltip>
            <Tooltip placement="bottom" title="View on npmjs">
                <span className={'npmIcon'}>
                    <a href={'https://www.npmjs.com/package/react-validatable-form'} target="_blank" rel="noreferrer">
                        <img src={'https://maliksenpai.github.io/react-validatable-form-demo-nextjs/npm.png'} width={"50%"} height={"50%"} alt="npm_icon" />
                    </a>
                </span>
            </Tooltip>
            <Tooltip placement="bottom" title="Current Version">
                <span className={'versionInfo'}>
                    <a href={'https://www.npmjs.com/package/react-validatable-form'} target="_blank" rel="noreferrer">
                        {versionInfo}
                    </a>
                </span>
            </Tooltip>
        </div>
    );
};

export default Settings;
