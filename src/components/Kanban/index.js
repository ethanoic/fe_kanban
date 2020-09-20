import React from 'react'
import styles from './kanban.module.css'
import CardColumn from '../CardColumn'
import { connect } from 'react-redux';

const KanBan = (props) => {
  const { columns } = props
  return (
    <div className={styles.kanban}>
      {columns.map((c, i) => (
        <CardColumn key={i} className="flex-fill" {...c} />
      ))}
    </div>
  )
}

const mapStateToProps = (state) => ({
  columns: state.columns
});

export default connect(mapStateToProps, null)(KanBan);