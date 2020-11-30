import React, {CSSProperties, ReactNode} from 'react';
import st from './MyTable.module.css';

export type TableNyaModelType = {
    title: (index: number, loading: boolean) => ReactNode;
    render: (dataItem: any, modelIndex: number, dataIndex: number, loading: boolean) => ReactNode;
}

export type TableNyaPropsType = {
    loading?: boolean; title?: string; model: TableNyaModelType[]; data: any;
    headerStyle?: CSSProperties, tableStyle?: CSSProperties, rowsStyle?: CSSProperties, rowStyle?: CSSProperties,
}

const MyTable: React.FC<TableNyaPropsType> = (
    {
        loading = false, title = 'table', model, data,
    }
) => {

    return (
        <div className={st.wrapper}>
            {title}

            <div className={st.header}>
                {model.map((m, index) => m.title(index, loading))}


            </div>

            <div className={st.row}>
                {data.map((dataItem: any, dataIndex: number) => (
                    <div key={title + '-row-' + (dataItem._id || dataIndex)}
                        className={st.inside}>
                        {model.map((m: any, modelIndex: any) =>
                            m.render(dataItem, modelIndex, dataIndex, loading))}

                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyTable;
