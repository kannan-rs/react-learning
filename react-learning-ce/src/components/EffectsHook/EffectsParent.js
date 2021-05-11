import React from 'react'
import ClassCompCompare from './Effects/ClassCompCompare'
import ClassCompConditionalUpdate from './ConditionalEffects/ClassCompConditionalUpdate'
import ConditionalEffects from './ConditionalEffects/ConditionalEffects'
import EffectsForClickCount from './Effects/EffectsForClickCount'
import MouseMoveClass from './EffectCallOnce/MouseMoveClass'
import MouseMoveEffect from './EffectCallOnce/MouseMoveEffect'
import UnmountParent from './EffectsOnUnmount/UnmountParent'

function EffectsParent() {
    return (
        <div>
            {/* <ClassCompCompare />
            <EffectsForClickCount /> */}

            {/* <ClassCompConditionalUpdate />
            <ConditionalEffects /> */}

            {/* <MouseMoveClass /> */}
            {/* <MouseMoveEffect /> */}

            <UnmountParent />

        </div>
    )
}

export default EffectsParent
