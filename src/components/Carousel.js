import React from "react"
import { Spring, Transition, animated } from "react-spring"

const CarouselContent = ({ children, activeIndex, prevIndex }) => (
  <Transition
    native
    keys={activeIndex}
    initial={{ x: 0 }}
    from={{
      opacity: 0,
      x: prevIndex < activeIndex ? 200 : -200
    }}
    enter={{ opacity: 1, x: 0 }}
    leave={{
      opacity: 0,
      x: prevIndex < activeIndex ? -100 : 100,
      position: "absolute",
      pointerEvents: "none"
    }}
    delay={1}
  >
    {({ x, ...rest }) => (
      <animated.div
        style={{
          transform: x.interpolate(val => `translate3d(${val}px,0,0)`),
          ...rest
        }}
      >
        {children[activeIndex]}
      </animated.div>
    )}
  </Transition>
)

const HeightTransition = ({ children }) => (
  <Spring native force from={{ height: "auto" }} to={{ height: "auto" }}>
    {styles => <animated.div style={styles}>{children}</animated.div>}
  </Spring>
)

class Carousel extends React.Component {
  state = {
    activeIndex: 0,
    prevIndex: -1
  }

  select = index => {
    this.setState(prevState => ({
      prevIndex: prevState.activeIndex,
      activeIndex: index
    }))
  }

  getItemProps = (props = {}) => ({
    ...props,
    select: this.select
  })

  render() {
    return (
      <HeightTransition>
        <CarouselContent
          activeIndex={this.state.activeIndex}
          prevIndex={this.state.prevIndex}
        >
          {this.props.children({
            getItemProps: this.getItemProps
          })}
        </CarouselContent>
      </HeightTransition>
    )
  }
}

export default Carousel
