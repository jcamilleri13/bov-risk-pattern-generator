import './App.css'

import { useState } from 'react'

import { Pattern } from './Pattern'

function App () {
  // I think setting the state causes the component to
  // re-render, even though it's not being used anywhere.
  const [, setSeed] = useState(0)
  const onGenerate = () => { setSeed(Math.random()) }

  const [configuration, setConfiguration] = useState({
    columns: 50,
    maxCircles: 10,
    minCircles: 3,
    rows: 5,
    useSecondaryColours: true
  })

  const onSave = () => {}

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>BOV Risk Management: Pattern Generator</h1>
      </header>

      <Pattern {...configuration} key={JSON.stringify(configuration)} />

      <footer>
        <div className='controls'>
          <div className='control'>
            <label itemID='rows'>Rows</label>
            <input
              id='rows'
              type='number'
              value={configuration.rows}
              onChange={e => setConfiguration(
                { ...configuration, rows: e.target.value }
              )}
            />
          </div>
          <div className='control'>
            <label itemID='columns'>Columns</label>
            <input
              id='columns'
              type='number'
              value={configuration.columns}
              onChange={e => setConfiguration(
                { ...configuration, columns: e.target.value }
              )}
            />
          </div>
          <div className='control'>
            <label itemID='minCircles'>Minimum # of circles</label>
            <input
              id='minCircles'
              type='number'
              value={configuration.minCircles}
              onChange={e => setConfiguration(
                { ...configuration, minCircles: e.target.value }
              )}
            />
          </div>
          <div className='control'>
            <label itemID='maxCircles'>Maximum # of circles</label>
            <input
              id='maxCircles'
              type='number'
              value={configuration.maxCircles}
              onChange={e => setConfiguration(
                { ...configuration, maxCircles: e.target.value }
              )}
            />
          </div>
          <div className='control'>
            <label itemID='useSecondaryColours'>Use secondary colours</label>
            <input
              id='useSecondaryColours'
              type='checkbox'
              checked={configuration.useSecondaryColours}
              onChange={e => setConfiguration(
                { ...configuration, useSecondaryColours: e.target.checked }
              )}
            />
          </div>
        </div>
        <div className='button-container'>
          <button onClick={onGenerate}>Generate</button>
          <button onClick={onSave}>Save</button>
        </div>
      </footer>
    </div>
  )
}

export default App
