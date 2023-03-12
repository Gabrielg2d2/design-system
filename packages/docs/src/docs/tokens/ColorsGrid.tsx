import { colors } from '@gabs-ui/tokens'
import { getContrast } from 'polished'
import React from 'react'

export function ColorsGrid() {
  return (
    <div>
      {Object.entries(colors).map(([key, color]) => (
        <div key={key} style={{ backgroundColor: color, padding: '2rem' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              color: getContrast(color, 'white') < 3.5 ? 'black' : 'white',
            }}
          >
            <strong>{key}</strong>
            <span>{colors[key]}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
