import { Button } from '../components/Button';

import '../styles/auth.scss'
import '../styles/global.scss'

export function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
        </div>
        <div className="col-6 mt-5">
          <form>
            <input
              type="text"
              placeholder="Digite o código da sala de bate papo"
            />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
        <div className="col"> 
        </div>
      </div>
    </div>
  )
}