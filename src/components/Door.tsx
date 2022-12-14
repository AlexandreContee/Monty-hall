import DoorModel from "../model/Door"

import Gift from './Gift'

import styles from "../styles/Door.module.css"

interface DoorProps {
  value: DoorModel
  onChange: (newDoor: DoorModel) => void
}

export default function Door(props: DoorProps) {

  const door = props.value
  const selectedStyle = door.selected && !door.opened ? styles.selected : ''

  const alternateSelection = () => {
    props.onChange(door.alternateSelection())
  }
  const open = (e: { stopPropagation: () => void }) => {
    e.stopPropagation()
    props.onChange(door.open())
  }

  function renderDoor() {
    return (
      <div className={styles.door}>
        <div className={styles.number}>{door.number}</div>
        <div className={styles.knob}
          onClick={open}></div>
      </div>
    )
  }
  function renderGift() {
    return (
      <Gift />
    )
  }

  return (
    <div className={styles.area} onClick={alternateSelection}>
      <div className={`${styles.structure} ${selectedStyle}`}>
        {door.closed ? renderDoor() : door.hasGift ? renderGift() : false}
      </div>
      <div className={styles.floor}></div>
    </div>
  )
}
