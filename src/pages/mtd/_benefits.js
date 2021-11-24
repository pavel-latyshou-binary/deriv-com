import React from 'react'
import styled from 'styled-components'
import { Container, Flex } from 'components/containers'
import { Header } from 'components/elements'
import { LinkButton } from 'components/form'
import device from 'themes/device.js'
import EnhancedIcon from 'images/svg/binary-to-deriv/enhanced-icon.svg'
import FavoriteIcon from 'images/svg/binary-to-deriv/favorite-icon.svg'
import ModernIcon from 'images/svg/binary-to-deriv/modern-icon.svg'
import NoSignupIcon from 'images/svg/binary-to-deriv/no-signup-icon.svg'
import Over100Icon from 'images/svg/binary-to-deriv/over-100-icon.svg'
import SupportIcon from 'images/svg/binary-to-deriv/support-icon.svg'

const ParentWrapper = styled(Container)`
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 964px;
    width: 100%;

    @media ${device.laptop} {
        flex-direction: column;
    }
`
const Icon = styled.img`
    width: 48px;
    height: 48px;
`
const ContentWrapper = styled(Flex)`
    max-width: 470px;
    margin-bottom: 24px;

    :nth-child(odd) {
        margin-right: 24px;
    }

    @media ${device.laptop} {
        max-width: 58.8rem;
        width: 100%;
        padding: 0 16px;
        margin-bottom: 34px;

        :nth-child(odd) {
            margin-right: 0;
        }
    }
`
const BtnWrapper = styled(Flex)`
    margin-top: 16px;
    padding-bottom: 80px;
    @media ${device.laptop} {
        margin-top: 0;
        padding-bottom: 0;
    }
`
const StyledLinkButton = styled(LinkButton)`
    padding: 10px 16px;
`

const benefitsItems = [
    {
        icon: NoSignupIcon,
        icon_alt: 'No Signup required',
        header: 'No sign-up required',
        desc: 'Just log in with your Binary.com credentials and start trading right away.',
    },
    {
        icon: Over100Icon,
        icon_alt: 'Over 100+ instruments',
        header: 'Over 100+ instruments',
        desc: 'Trade what you like — forex, commodities, stocks, stock indices, and synthetic indices.',
    },
    {
        icon: EnhancedIcon,
        icon_alt: 'An enhanced experience',
        header: 'An enhanced experience',
        desc: 'Trade confidently on a service created by a trusted online trading brand with over 20 years of experience. ',
    },
    {
        icon: FavoriteIcon,
        icon_alt: 'Your favourites in one place',
        header: 'Your favourites in one place',
        desc: 'Trade the way you like on the Deriv MetaTrader 5 (DMT5) and DTrader. ',
    },
    {
        icon: ModernIcon,
        icon_alt: 'User-friendly, modern design',
        header: 'User-friendly, modern design',
        desc: 'Enjoy an intuitive interface that even new traders find easy to use.',
    },
    {
        icon: SupportIcon,
        icon_alt: 'Support when you need it',
        header: 'Support when you need it',
        desc: 'Get access to round-the-clock customer support, an enriched Help Centre, plus other helpful content. ',
    },
]

const Benefits = () => {
    return (
        <ParentWrapper>
            <Flex laptop={{ p: '0 16px' }}>
                <Header type="heading-3" align="center" mb="40px">
                    Deriv is everything you love about Binary.com, plus more
                </Header>
            </Flex>
            {benefitsItems.map((items, index) => {
                return (
                    <ContentWrapper key={index} jc="flex-start">
                        <Flex mr="16px" max_width="48px">
                            <Icon src={items.icon} alt={items.icon_alt} />
                        </Flex>
                        <Flex fd="column">
                            <Header type="subtitle-1" mb="8px">
                                {items.header}
                            </Header>
                            <Header type="paragraph-1" weight="normal">
                                {items.desc}
                            </Header>
                        </Flex>
                    </ContentWrapper>
                )
            })}
            <Flex>
                <BtnWrapper>
                    <StyledLinkButton to="https://deriv.com/" secondary="true">
                        Explore Deriv now
                    </StyledLinkButton>
                </BtnWrapper>
            </Flex>
        </ParentWrapper>
    )
}

export default Benefits
