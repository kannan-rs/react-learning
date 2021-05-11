import React, { Component } from 'react'
import ErrorBoundary from './ErrorBoundary'
import Hero from './Hero'

class HerosList extends Component {
    render() {
        return (
            <div>
                <ErrorBoundary>
                    <Hero name="Super Man" />
                </ErrorBoundary>
                <ErrorBoundary>
                    <Hero name="Bat Man" />
                </ErrorBoundary>
                <ErrorBoundary>
                    <Hero name="Jocker" />
                </ErrorBoundary>
                
            </div>
        )
    }
}

export default HerosList
