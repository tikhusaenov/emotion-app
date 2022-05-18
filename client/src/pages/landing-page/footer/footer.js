import React from 'react'
import {
    FooterGrid,
    FooterLink,
    FooterLinkItems,
    FooterLinkTitle,
    FooterRights,
    FooterWrapper,
} from './footer.style'
import { footerData } from '../../../data/footer-data'
import { Section } from '../../../component.style'

const Footer = () => {
    return (
        <Section padding="4rem 0 2rem 0">
            <FooterWrapper>
                <FooterGrid justify="space-between">
                    {footerData.map((footerItem, index) => (
                        <FooterLinkItems key={index}>
                            <FooterLinkTitle>{footerItem.title}</FooterLinkTitle>
                            {footerItem.links.map((link, linkIndex) => (
                                <FooterLink key={linkIndex} to="/">
                                    {link}
                                </FooterLink>
                            ))}
                        </FooterLinkItems>
                    ))}
                </FooterGrid>
                <FooterRights>emotional © 2022</FooterRights>
            </FooterWrapper>
        </Section>
    )
}

export default Footer
