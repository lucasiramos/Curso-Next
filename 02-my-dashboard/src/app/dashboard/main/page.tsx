import { WidgetGrid } from '@/components/dashboard/WidgetGrid';
import { SimpleWidget } from '../../../components/dashboard/SimpleWidget';
export default function MainPage(){
    return(
        <div className="text-black p-2">
            <h1 className="mt-2 text-3xl">Dashboard</h1>
            <span className="text-xl">Información general</span>

            <WidgetGrid/>
        </div>
    )
}