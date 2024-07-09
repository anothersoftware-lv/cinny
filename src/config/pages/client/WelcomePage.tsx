import React from "react";
import AppLogoSvg from '../../../../public/res/svg/cinny.svg';

const WelcomePageConfig = {
    appLogoSvg: AppLogoSvg,
    title: 'Šī ir Sintija (Cinny)',
    subTitle: <span>
                Matrix servera čata aplikācija  
                    <a
                        href="https://github.com/cinnyapp/cinny/releases"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                   v3.2.0
                </a>
                <br/>
              </span>,
    content: ''
        /*
        <div>
            <Button
                as="a"
                href="https://github.com/cinnyapp/cinny"
                target="_blank"
                rel="noreferrer noopener"
                before={<Icon size="200" src={Icons.Code}/>}
            >
            <Text as="span" size="B400" truncate>
                Source Code
            </Text>
            </Button>
            <Button
                as="a"
                href="https://cinny.in/#sponsor"
                target="_blank"
                rel="noreferrer noopener"
                fill="Soft"
                before={<Icon size="200" src={Icons.Heart}/>}
            >
        <Text as="span" size="B400" truncate>
            Atbalsts Veidotājiem
        </Text>
    </Button>
        </div>
         */
};

export default WelcomePageConfig;