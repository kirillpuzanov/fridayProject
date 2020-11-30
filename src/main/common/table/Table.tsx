import React, {CSSProperties, ReactNode} from 'react';
import st from './table.module.css';


export const MyTable: React.FC<TablePropsType> = ({
                                                      loading = false,
                                                      title = 'table',
                                                      model,
                                                      data}
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
                        {model.map((m, modelIndex) =>
                            m.render(dataItem, modelIndex, dataIndex, loading))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export type TableModelType = {
    title: (index: number, loading: boolean) => ReactNode;
    render: (dataItem: any, modelIndex: number, dataIndex: number, loading: boolean) => ReactNode;
}

export type TablePropsType = {
    loading?: boolean; title?: string; model: TableModelType[]; data: any;
    headerStyle?: CSSProperties, tableStyle?: CSSProperties, rowsStyle?: CSSProperties, rowStyle?: CSSProperties,
}
