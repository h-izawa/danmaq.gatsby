'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import Link from 'gatsby-link';
import { Columns, Content, Section } from 'bloomer';

import Article from '~/src/components/Article';
import Icon from '~/src/components/Icon';

import Heading from './Heading';

class Blog extends React.Component {
    render =
        () =>
        (({ items, langKey, t }) =>
            <Section id="blog">
                <Heading caption={t('blogHeading')}
                         detail={t('blogDesc')} />
                <Columns isCentered isMultiline>
                    {items.map(Article.create)}
                </Columns>
                <Content>
                    <Link className='button is-fullwidth is-large is-outlined is-link'
                          to={`/${langKey}/blog`}>
                        <Icon i="angle-down" size={2} />
                        &nbsp;{t('blogMore')}
                    </Link>
                </Content>
            </Section>
        )(this.props);

    /** Property types. */
    static propTypes = {
        items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
        langKey: PropTypes.string.isRequired,
        t: PropTypes.func.isRequired,
    };
};

export default translate('LP')(Blog);